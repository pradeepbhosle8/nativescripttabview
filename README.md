# Nativescript Tabview

Click On component folder 

Nativescript Dynamically routing Tabview Normal Routing 
How to run Code
npm install
tns add platform android or tns add platform ios
tns run android {command on terminal}

app folder auth folder,  Share/ui folder and tabview folder 
and tabview child folder as home, about, portfolio, contact
share/ui folder which is use common for Action bar
actionbar component ts file

<ActionBar [title]="title" class="actionbar">
    <NavigationButton text="Back"
                     *ngIf="canGoBack"  
                      android.systemIcon="ic_menu_back" 
                      (tap)="onGoBack()">

        
    </NavigationButton>
</ActionBar>

*note: onGoback function which can back and condition cangoBAck is for parent component not show back button or icon

and action bar component ts file 

 @Input() title: string;
 @Input() showBackButton = true;
 
construction add RouterExtensions
ngOnInit add 

get canGoBack() {
    return this.router.canGoBack() && this.showBackButton;
    }

    onGoBack(){
        this.router.back();
    }
    
tabview html file 
    
    <TabView #tabView androidTabsPosition="bottom" selectedIndex="0" tabBackgroundColor="orangered"  selectedTabTextColor="white" >

    <StackLayout *tabItem="{title: 'Home'}" >
        <page-router-outlet  name="homeTab" > </page-router-outlet>
    </StackLayout>
    
    <StackLayout *tabItem="{title: 'About'}" >
        <page-router-outlet  name="aboutTab" ></page-router-outlet>
    </StackLayout>

    <StackLayout *tabItem="{title: 'Portfolio'}">
        <page-router-outlet   name="portfolioTab"></page-router-outlet>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Contact'}" >
       <page-router-outlet   name="contactTab" ></page-router-outlet>
       </StackLayout>
       </TabView>
       
tabview ts file

import RouterExtensions, ActivatedRoute ,
import{Page} from 'tns-core-modules/ui/page/page';
constructor(
        private router: RouterExtensions,
        private active: ActivatedRoute,
        private page: Page,
        ) {}

    ngOnInit(){
        console.log('tabview components');
        this.router.navigate([{outlets: { homeTab: ['home'], aboutTab: ['about'], portfolioTab: ['portfolio'],contactTab: ['contact']  } }],
        { relativeTo: this.active  }
        );
        this.page.actionBarHidden = true;
    }
    
  routing file
  
  const routes: Routes = [

    {path:'',
    component: AuthComponent,
    pathMatch: "full" }
    
    {path: 'tabview', component: TabviewCompnent, 
    children: [

        {path: 'home', 
        component: HomeComponent, 
        outlet: 'homeTab'},
        
        {path: 'about', 
        component: AboutComponent, 
        outlet: 'aboutTab'},
        
        {path: 'portfolio', 
        component: PortfolioComponent, 
        outlet: 'portfolioTab'},
        
        {path: 'contact', 
        component: ContactComponent, 
        outlet: 'contactTab'}

    ]}
    ];




