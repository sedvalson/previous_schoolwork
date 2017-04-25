<?xml version = "1.0"?>

<!-- nutrition.xsl -->

<xsl:stylesheet version = "1.0"
   xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
   
   <xsl:output method = "html" doctype-system = "about:legacy-compat" />
   <xsl:template match = "/"> 
   
   <html xmlns = "http://www.w3.org/1999/xhtml">
      <head>
         <meta charset = "utf-8"/>
         <title>Nutrition</title>
      </head>
      
      <body>
         <table border="1">
         <caption>Information about Grandma Whites Cookies</caption>
            <thead>
               <tr>
                  <th>Serving Size = </th>
                  <th><xsl:value-of select = "/cookies/servingSize"/></th>
               </tr>              
               <tr>
                  <th>Ingredient</th>
                  <th>Amount</th>
               </tr>
            </thead>
            <xsl:for-each select = "/cookies/ingredient">
               <tr>
                  <td><xsl:value-of select = "name" /></td>
                  <td><xsl:value-of select = "amount" /></td>
               </tr>
            </xsl:for-each>
         </table>
      </body>
   </html>
   
   </xsl:template>
</xsl:stylesheet>
         