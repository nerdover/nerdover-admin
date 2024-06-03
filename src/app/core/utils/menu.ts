type Menu = {
  link: string[];
  title: string;
  icon: string;
  exact: boolean;
};
export const MAIN_MENU: Menu[] = [
  {
    link: ['/dashboard'],
    title: 'แดชบอร์ด',
    icon: 'dashboard',
    exact: false,
  },
  {
    link: ['/manage'],
    title: 'จัดการบทเรียน',
    icon: 'folder_managed',
    exact: false,
  },
  {
    link: ['/photos'],
    title: 'รูปภาพ',
    icon: 'photo_library',
    exact: false,
  },
];
