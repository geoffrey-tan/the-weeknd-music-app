import slugify from 'slugify'

const getSlug = (name: string) => slugify(name, { lower: true })

export default getSlug
