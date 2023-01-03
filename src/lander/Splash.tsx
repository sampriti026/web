import Typical from 'react-typical'
import Balancer from 'react-wrap-balancer'

export const Splash = () => {
  return (
    <>
      <h1 className="text-6xl md:text-9xl font-extrabold font-serif text-zinc-800">
        Lex
        <a
          href="https://snapshot.org/#/lexdao.eth"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-800 font-serif"
        >
          <Balancer>DAO</Balancer>
        </a>
      </h1>
      <p className="text-xl md:text-5xl font-mono">
        <Balancer>
          <Typical
            steps={[
              'Building',
              1000,
              'Building the',
              500,
              'Building the next',
              500,
              'Building the next generation',
              500,
              'Building the next generation of',
              500,
              'Building the next generation of contracts',
            ]}
            wrapper="p"
          />
        </Balancer>
      </p>
    </>
  )
}
