import {
  ChatDotsIcon,
  QuestionCircleIcon,
  StethoscopeIcon,
  BellIcon,
  UserIcon,
  PenIcon,
  HomeIcon
} from "@/icons";

export const sectionKeys = {
  services: "sectionServices",
  about: "sectionAbout",
  comments: "sectionComments",
  blogs: "sectionBlogs",
  contact: "sectionContact",
  faqs: "sectionFaqs",
}

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
    sectionKey: sectionKeys.services,
    hasDropdown: true
  },
  {
    name: 'Hakkımda',
    path: 'hakkimda',
    sectionID: 'hakkimda',
    icon: <UserIcon width={16} color="#9c40ff" />,
    sectionKey: sectionKeys.about
  },
  {
    name: 'Yorumlar',
    path: 'yorumlar',
    sectionID: 'yorumlar',
    icon: <ChatDotsIcon width={16} color="#9c40ff" />,
    sectionKey: sectionKeys.comments
  },
  {
    name: 'Yazılar',
    path: 'yazilar',
    sectionID: 'yazilar',
    icon: <PenIcon width={16} color="#9c40ff" />,
    sectionKey: sectionKeys.blogs
  },
  {
    name: 'İletişim',
    path: 'iletisim',
    sectionID: 'iletisim',
    icon: <BellIcon width={16} color="#9c40ff" />,
    sectionKey: sectionKeys.contact
  },
  {
    name: 'SSS',
    path: 'sss',
    sectionID: 'sss',
    icon: <QuestionCircleIcon width={16} color="#9c40ff" />,
    sectionKey: sectionKeys.faqs
  }
]