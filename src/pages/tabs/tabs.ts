import { Component } from '@angular/core';

import { BrowsePage } from '../browse/browse';
import { GroupPage } from '../group/group';
import { SellPage } from '../sell/sell';
import { ActivityPage } from '../activity/activity';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tab1Root: any = BrowsePage;
  tab2Root: any = GroupPage;
  tab3Root: any = SellPage;
  tab4Root: any = ActivityPage;
  tab5Root: any = MePage;

  constructor() {

  }
}