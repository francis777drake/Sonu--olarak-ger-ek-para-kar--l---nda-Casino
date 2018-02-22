const GlobalConfigs = {
  pageTitle: "Sonuç olarak gerçek para karşılığında Casino",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "az-i-no777.top",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"az-i-no777.top"},
    {
      icon: 'list', text: 'Видео',
      url: "az-i-no777.top", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"az-i-no777.top"},
    {
      icon: 'info', text: 'О нас',
      url: "az-i-no777.top"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "az-i-no777.top"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "orange lighten-2", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



