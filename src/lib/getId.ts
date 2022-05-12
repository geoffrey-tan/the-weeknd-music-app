import slugify from 'slugify'

const getId = (name: string) => slugify(name, { lower: true })

export default getId
