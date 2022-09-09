import { db } from 'src/lib/db'

export const authentications = () => {
  return db.authentication.findMany()
}

export const authentication = ({ id }) => {
  return db.authentication.findUnique({
    where: { id },
  })
}

export const createAuthentication = ({ input }) => {
  return db.authentication.create({
    data: input,
  })
}

export const updateAuthentication = ({ id, input }) => {
  return db.authentication.update({
    data: input,
    where: { id },
  })
}

export const deleteAuthentication = ({ id }) => {
  return db.authentication.delete({
    where: { id },
  })
}
