import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import LebronStretch from "../photos/lebron_transparent.png";
import "./PDFFile.css"

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>

        <Text style={styles.header} fixed></Text>

        <Image style={styles.image} src={LebronStretch} />

        <Text style={styles.}>
        <p className="grid-container">
                      <div>
                        <p
                          style={{
                            height: "13pt",
                            color: "#de1e14",
                            marginLeft: "1rem",
                            fontSize: "26pt",
                          }}
                        >
                          NexTurn India Private Limited
                        </p>
                        <p
                          style={{
                            height: "5pt",
                            marginLeft: "1.3rem",
                            marginTop: "2rem",
                          }}
                        >
                          I-30/45, Prashanti Enclave, Kanajiguda, Hyderabad -
                          500015, India
                        </p>
                      </div>

                      <div>
                        <p>
                          <p
                            style={{
                              height: "5pt",
                              marginLeft: "1rem",
                              marginTop: "1.5rem",
                            }}
                          >
                            Mail Id: info@nexturntech.com
                          </p>
                          <p style={{ height: "0pt", marginLeft: "1rem" }}>
                            Phone: +91 7993810031
                          </p>
                        </p>
                      </div>
                    </p>
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />

      </Page>
    </Document>
  );
};

export default PDFFile;
