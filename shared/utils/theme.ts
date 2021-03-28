import { extendTheme } from "@chakra-ui/react"


const customeTheme = extendTheme({
  colors: {
    main: '#027581',
    selected: '#036673',
    darkMode: '#111216',
  },
  fonts: {
    // body: "Poppins, sans-serif",
    // heading: "IBM Plex Sans, sans-serif",
    // monospace: "Source Code Pro, monospace",
  },
  fontSizes: {

  },

  components: {
    Link: {
      baseStyle: {
        textDecoration: 'none'
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 'lg',

      },
      defaultProps: {
        // size: 'lg'
      },
    },
    FormLabel: {
      baseStyle: {
        color: 'gray.600'
      }
    },
    Input: {
      baseStyle: {
        borderRadius: 'lg',
        color: 'black',
        minWidth: [350],
        _focus: { borderColor: 'green.900' },
      },

      defaultProps: {
        size: 'lg',
        variant: 'outline',
      },
      variants: {
        outline: {
          field: {
            borderColor: 'gray.200',
            border: '1px',
            _disabled: {
              bg: 'gray.50',
              cursor: 'not-allowed'
            },
            _focus: { borderColor: 'green.900' },
            _hover: { border: '1px', borderColor: 'gray.400' }
          }
        }
      }
    }
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: props => ({
      "html, body": {
        textDecoration: 'none',
        "*:focus": {
          outline: '0 !important',
          boxShadow: 'none !important',
        },
      },

      pre: { fontFamily: 'monospace' },
      body: {

        bg: props.colorMode === 'light' ? 'white' : 'darkMode',
      },
    }),
  }
})

export default customeTheme