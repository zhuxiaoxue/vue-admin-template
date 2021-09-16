import defaultSettings from '@/settings'

const title = defaultSettings.title || '波洛斯开放平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
