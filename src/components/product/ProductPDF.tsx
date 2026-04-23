import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { ChemicalProduct } from '../../../msds/msds';
import logo from '../../assets/logo.webp';

const styles = StyleSheet.create({
  page: {
    padding: 60,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#333',
    lineHeight: 1.6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#097090',
    paddingBottom: 25,
  },
  productName: {
    fontSize: 26,
    fontFamily: 'Helvetica-Bold',
    color: '#097090',
    textTransform: 'uppercase',
    flex: 1,
    paddingRight: 40,
    lineHeight: 1.3,
  },
  logo: {
    width: 130,
    height: 105,
  },
  topDetails: {
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  detailLabel: {
    fontFamily: 'Helvetica-Bold',
    width: 100,
  },
  detailValue: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#097090',
    marginTop: 25,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
  },
  introduction: {
    marginBottom: 15,
    textAlign: 'justify',
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    minHeight: 25,
    alignItems: 'center',
  },
  tableCellHeader: {
    padding: 8,
    fontFamily: 'Helvetica-Bold',
    backgroundColor: '#f2f8f9',
    color: '#097090',
  },
  tableCell: {
    padding: 8,
  },
  col1: { width: '40%', borderRightWidth: 1, borderRightColor: '#ccc' },
  col2: { width: '30%', borderRightWidth: 1, borderRightColor: '#ccc' },
  col3: { width: '30%' },
  colHalf: { width: '50%', borderRightWidth: 1, borderRightColor: '#ccc' },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingLeft: 10,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 60,
    right: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 15,
    textAlign: 'left',
  },
  footerText: {
    fontSize: 10,
    color: '#097090',
  },
  footerLink: {
    color: '#097090',
    textDecoration: 'underline',
    fontFamily: 'Helvetica-Bold',
  }
});

interface ProductPDFProps {
  product: ChemicalProduct;
}

const ProductPDF = ({ product }: ProductPDFProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.productName}>{product.productName || 'Product Name'}</Text>
          <Image src={logo} style={styles.logo} />
        </View>

        {/* Top Identifiers */}
        <View style={styles.topDetails}>
          {product.identifiers.casNumber && (
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>CAS Number:</Text>
              <Text style={styles.detailValue}>{product.identifiers.casNumber}</Text>
            </View>
          )}
          {product.brandNames && product.brandNames.length > 0 && (
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Product Brand:</Text>
              <Text style={styles.detailValue}>{product.brandNames.join(', ')}</Text>
            </View>
          )}
          {product.identifiers.chemicalFormula && (
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Formula:</Text>
              <Text style={styles.detailValue}>{product.identifiers.chemicalFormula}</Text>
            </View>
          )}
        </View>

        <View style={styles.hr} />

        {/* Introduction Section */}
        <Text style={styles.sectionTitle}>Product Introduction</Text>
        <Text style={styles.introduction}>
          {product.details.introduction || `${product.productName} is a high-purity industrial grade chemical solution optimized for stability and performance across various manufacturing sectors.`}
        </Text>

        {/* Physical & Chemical Properties Section */}
        <Text style={styles.sectionTitle}>Physical and Chemical Properties</Text>
        <View style={styles.table}>
          {/* Detailed Attributes if available */}
          {Object.entries(product.details)
            .filter(([key, value]) => key !== 'introduction' && value)
            .map(([key, value], i) => (
              <View key={key} style={styles.tableRow}>
                <View style={styles.col1}>
                  <Text style={[styles.tableCell, { fontFamily: 'Helvetica-Bold' }]}>
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  </Text>
                </View>
                <View style={[styles.col2, { width: '60%' }]}>
                  <Text style={styles.tableCell}>{String(value)}</Text>
                </View>
              </View>
            ))}
        </View>

        {/* Technical Specifications Table */}
        {product.specifications && product.specifications.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Analytical Specifications</Text>
            <View style={styles.table}>
              <View style={[styles.tableRow, { backgroundColor: '#f9f9f9' }]}>
                <View style={styles.col1}><Text style={styles.tableCellHeader}>Parameter</Text></View>
                <View style={styles.col2}><Text style={styles.tableCellHeader}>Requirement</Text></View>
                <View style={styles.col3}><Text style={styles.tableCellHeader}>Result</Text></View>
              </View>
              {product.specifications.map((spec, i) => (
                <View key={i} style={styles.tableRow}>
                  <View style={styles.col1}><Text style={styles.tableCell}>{spec.parameter}</Text></View>
                  <View style={styles.col2}><Text style={styles.tableCell}>{spec.requirement}</Text></View>
                  <View style={styles.col3}><Text style={styles.tableCell}>{spec.result} {spec.uom || ''}</Text></View>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Applications Section */}
        {((product.applications && product.applications.length > 0)) && (
          <View>
            <Text style={styles.sectionTitle}>Applications</Text>
            {product.applications.map((app, i) => (
              <View key={i} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{app}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Packing Options Section */}
        {product.packaging && product.packaging.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Packing Options</Text>
            {product.packaging.map((pack, i) => (
              <View key={i} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{pack}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            To Get a Quote, Email On:{' '}
            <Text style={styles.footerLink}>marketing@vantaraenergy.com</Text>
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ProductPDF;
