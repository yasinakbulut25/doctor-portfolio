import {
  ChatDotsIcon,
  QuestionCircleIcon,
  StethoscopeIcon,
  BellIcon,
  UserIcon,
  PenIcon,
  HomeIcon
} from "@/icons";

export const routes = [
  {
    name: 'Ana Sayfa',
    path: '/',
    sectionID: 'ana-sayfa',
    icon: <HomeIcon width={16} color="#9c40ff" />,
  },
  {
    name: 'Hizmetler',
    path: 'hizmetler',
    sectionID: 'hizmetler',
    icon: <StethoscopeIcon width={16} color="#9c40ff" />,
    sectionKey: "sectionServices",
  },
  {
    name: 'Hakkımda',
    path: 'hakkimda',
    sectionID: 'hakkimda',
    icon: <UserIcon width={16} color="#9c40ff" />,
    sectionKey: "sectionAbout",
  },
  {
    name: 'Yorumlar',
    path: 'yorumlar',
    sectionID: 'yorumlar',
    icon: <ChatDotsIcon width={16} color="#9c40ff" />,
    sectionKey: "sectionComments",
  },
  {
    name: 'Yazılar',
    path: 'yazilar',
    sectionID: 'yazilar',
    icon: <PenIcon width={16} color="#9c40ff" />,
    sectionKey: "sectionBlogs",
  },
  {
    name: 'İletişim',
    path: 'iletisim',
    sectionID: 'iletisim',
    icon: <BellIcon width={16} color="#9c40ff" />,
    sectionKey: "sectionContact",
  },
  {
    name: 'SSS',
    path: 'sss',
    sectionID: 'sss',
    icon: <QuestionCircleIcon width={16} color="#9c40ff" />,
    sectionKey: "sectionFaqs",
  }
]