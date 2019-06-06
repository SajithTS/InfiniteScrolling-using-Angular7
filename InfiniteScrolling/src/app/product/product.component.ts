import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  categoryId : string;
  productSubCategories: any[];
  productSubCategoriesDisplayed: any[];
  CategoryName: any;
  remainingSubCategoryCount: number;
  promotiontype:any;
  priceshow:boolean=false;

  catId:any;
  subCatId:any;
  subCatOneId:any;
  prodId:any;
  singleValuedProperties = [];
  Pricedata=[];
  public PriceRange=0;
  public ProductViewCount;
  QuantitychangeActive:boolean=false;
  ProdQuantity:any;
  Categoryid:any;
  SubcategoryId:any;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  public show:boolean=false;
  public show1:boolean=false;
  CurrentPage = 1;
  prevPages;
  prevPage = 1;
  prevPageSize = 10;
  limit = 16;
  PageNo = 1;
  Pages = Math.ceil(this.ProductViewCount / this.limit);
  subcatheading:any;
btnactive:boolean=false;
productCategoryinfo:any;
selectedProduct:any;
butnId:any;
selectedProperties: any = [];
multipleValuedProperties = [];
cartData: any;
maxPrice:number;
ProductQuantity:any;
cartQuantity:any;
subCatOneChoice: any[] = [];
propertiesProductId: any[] = [];
public isLoggedIn = false;
public subcategoryid;
public catheading:boolean=false;
public SubCategoryOneId;
public ProductId;
sliderValue = 0;
minValue:number=0;
maxValue: number = 100;
  page = 0;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.ProductCategory(this.categoryId, this.subcategoryid,this.SubCategoryOneId,this.ProductId);
    this.page = 1;
  }



  ProductCategory(cat, subcat,subcatone,productid) {
    this.singleValuedProperties = [];
     this.catId = cat;
     this.subCatId = subcat;
     this.subCatOneId = subcatone;
     this.prodId = productid;
     //this.paginator.pageIndex = 0;
     //this.PriceRange=(this.PriceRange==undefined?null:this.PriceRange);
     this.minValue=(this.minValue==undefined?null:this.minValue),
     this.maxValue=null;
     this.limit = 16;
     this.PageNo = 1; 
     this.CurrentPage = 1;
     this.prevPage = 1;
     this.prevPageSize = 0;
     this.Pages=0;
     this.show=true;
     this.subcatheading=null;
     this.catheading=false
     this.productService.GetAllProducts(4192,0,0,0,0,null,1, 8).subscribe((values: any) => {
    //this.eshopService.getrewardProductCategory1(this.catId,this.subCatId,this.subCatOneId,this.prodId,this.PriceRange,this.PageNo, this.limit).subscribe((values: any) => {
     this.btnactive=true;
      this.maxPrice = values.data.data.result[1];
      //this.setNewCeil(this.maxPrice);
      this.maxValue=this.maxPrice;
      this.minValue=0;

     // this.options.ceil=this.maxPrice ;
      //this.productCategoryinfo=values.Result[0];
      this.productCategoryinfo=values.data.data.result[0];
      
      this.ProdQuantity=this.productCategoryinfo
     
      this.productCategoryinfo.length>0?this.priceshow=true:this.priceshow=false;
     
      for(let i=0;i<this.productCategoryinfo.length;i++)
      {
        this.productCategoryinfo[i].count=1
      }
      this.productCategoryinfo.count=1
     if(this.productCategoryinfo.length>0)   {
      this.subcatheading=this.productCategoryinfo[0].subCategory;
      subcat==0?this.catheading=false:this.catheading=true;
       this.show=false;
       if (this.productCategoryinfo.productProperties) {
        this.selectedProduct.productProperties = JSON.parse(this.selectedProduct.productProperties);
        //this.setProductProperties(this.selectedProduct.productProperties);
      }
      
      }
       else{
        this.show=false;
        this.productCategoryinfo=null;
       }
     //this.ProductViewCount=values.Result[2];    
     this.ProductViewCount=values.data.data.result[2];
    
  });
    
   
  }

  GetNextRecords(){

    this.productService.GetAllProducts(4192,0,0,0,0,null,++this.page, 8).subscribe((values: any) => {
    //this.productCategoryinfo.push(values.data.data.result[0]);
    let products = values.data.data.result[0];
    products.forEach(element => {
      this.productCategoryinfo.push(element);
    });
          for(let i=0;i<this.productCategoryinfo.length;i++)
          {
            this.productCategoryinfo[i].count=1
          }
      this.ProductViewCount=values.data.data.result[2];
        });
     
  }

}
