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
    Button: {
      baseStyle: {
        borderRadius: 'lg',
        _active: { border: 0, outline: 0 },
        _focus: { outline: 0, border: '1px' },
        _hover: { color: 'gray.900', bg: 'gray.500' },
        _disabled: { bg: 'blue.900' }
      },
      defaultProps: {
        variant: 'solid',
        // size: 'lg'
      },
      variants: {
        main: {
          outline: 0,
          type: 'submit',
          color: 'gray.200',
          _hover: { bg: 'gray.700' },
          _active: { bg: 'gray.600' },
          _focus: { outline: 0 },
          variant: 'solid',
          bg: 'gray.900',
          width: '100%',
          height: 55,
          mt: 5
        }
      }
    },
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