import {
  authentications,
  authentication,
  createAuthentication,
  updateAuthentication,
  deleteAuthentication,
} from './authentications'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('authentications', () => {
  scenario('returns all authentications', async (scenario) => {
    const result = await authentications()

    expect(result.length).toEqual(Object.keys(scenario.authentication).length)
  })

  scenario('returns a single authentication', async (scenario) => {
    const result = await authentication({
      id: scenario.authentication.one.id,
    })

    expect(result).toEqual(scenario.authentication.one)
  })

  scenario('creates a authentication', async () => {
    const result = await createAuthentication({
      input: { accessToken: 'String', refreshToken: 'String' },
    })

    expect(result.accessToken).toEqual('String')
    expect(result.refreshToken).toEqual('String')
  })

  scenario('updates a authentication', async (scenario) => {
    const original = await authentication({
      id: scenario.authentication.one.id,
    })

    const result = await updateAuthentication({
      id: original.id,
      input: { accessToken: 'String2' },
    })

    expect(result.accessToken).toEqual('String2')
  })

  scenario('deletes a authentication', async (scenario) => {
    const original = await deleteAuthentication({
      id: scenario.authentication.one.id,
    })

    const result = await authentication({ id: original.id })

    expect(result).toEqual(null)
  })
})
