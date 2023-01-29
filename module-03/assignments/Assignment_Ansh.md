<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE catalog [
  <!ELEMENT catalog (product)>
  <!ELEMENT product (catalog_item+)>
 <!-- there one or more catlog_item so there is +  sign with catlog_item -->
  <!ATTLIST product product_id ID #REQUIRED>
  <!ATTLIST product description CDATA #REQUIRED>
  <!ATTLIST product product_image CDATA #REQUIRED>
  <!-- here the product required all the product_id, product description and product product_image  -->
  <!ELEMENT catalog_item (item_number,price,size+)>
    <!ATTLIST catalog_item gender (Men | Women) #REQUIRED >
  <!-- "catalog_item" element must have an attribute which is gender -->
  <!ELEMENT item_number (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
  <!-- item_number and price contain  parsed character data  (String) -->
  <!ELEMENT size (color_swatch+)>
  <!-- here the size element in the XML document is followed by one or more "color_swatch" elements.-->
  <!ATTLIST size description CDATA #REQUIRED>
  <!-- here the description is added for the "size" element because it provides more details related the size of the product -->
  <!ELEMENT color_swatch (#PCDATA)>
  <!ATTLIST color_swatch image CDATA #REQUIRED>
]>


<catalog>
  <product product_id="e4892f6a-7cce-11ec-90d6-0242ac120003" description="Cardigan Sweater"
    product_image="cardigan.jpg">
    <catalog_item gender="Men">
      <item_number>QWZ5671</item_number>
      <price>39.95</price>
      <size description="Medium">
        <color_swatch image="red_cardigan.jpg">Red</color_swatch>
        <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
      </size>
      <size description="Large">
        <color_swatch image="red_cardigan.jpg">Red</color_swatch>
        <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
      </size>
    </catalog_item>
    <catalog_item gender="Women">
      <item_number>RRX9856</item_number>
      <price>42.50</price>
      <size description="Small">
        <color_swatch image="red_cardigan.jpg">Red</color_swatch>
        <color_swatch image="navy_cardigan.jpg">Navy</color_swatch>
        <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
      </size>
      <size description="Medium">
        <color_swatch image="red_cardigan.jpg">Red</color_swatch>
        <color_swatch image="navy_cardigan.jpg">Navy</color_swatch>
        <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
        <color_swatch image="black_cardigan.jpg">Black</color_swatch>
      </size>
      <size description="Large">
        <color_swatch image="navy_cardigan.jpg">Navy</color_swatch>
        <color_swatch image="black_cardigan.jpg">Black</color_swatch>
      </size>
      <size description="Extra Large">
        <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
        <color_swatch image="black_cardigan.jpg">Black</color_swatch>
      </size>
    </catalog_item>
  </product>
</catalog>


<!-- Ansh Bhardwaj
N01552508 -->

![image info](../Screenshot%202023-01-25%20114815.png)

