import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgImageFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.35 2.075c-1.041.343-1.615 1.58-1.237 2.666.061.176.16.392.219.48.06.087.595.684 1.188 1.327.994 1.074 1.101 1.178 1.349 1.3.245.12.302.132.631.132s.386-.012.631-.132c.248-.123.355-.226 1.355-1.307.597-.646 1.136-1.255 1.198-1.354.298-.478.387-1.288.201-1.822-.493-1.414-2.096-1.807-3.116-.765l-.269.274-.271-.279a1.753 1.753 0 0 0-.58-.426c-.278-.133-.345-.148-.689-.158-.288-.008-.435.007-.61.064M7.9 6.065c-.878.212-1.63.971-1.838 1.855a2.604 2.604 0 0 0 .208 1.72c.3.611.97 1.138 1.65 1.298.56.131 1.179.057 1.72-.208.611-.3 1.138-.97 1.298-1.65a2.604 2.604 0 0 0-.208-1.72c-.3-.611-.97-1.138-1.65-1.298a3.082 3.082 0 0 0-1.18.003m8.153 5.114a4.283 4.283 0 0 0-1.605.656c-.125.086-1.191 1.023-2.368 2.083-1.177 1.06-2.257 2.017-2.4 2.126a4.77 4.77 0 0 1-1.38.679c-.411.109-1.221.147-1.651.078-.844-.136-1.178-.315-2.892-1.549a245.835 245.835 0 0 0-1.589-1.139l-.172-.12.014 2.334.014 2.333.109.378c.435 1.502 1.584 2.572 3.093 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083a4.003 4.003 0 0 0 3.097-2.905l.107-.392.011-2.32.011-2.32-1.579-1.132c-1.557-1.116-1.95-1.36-2.461-1.53a4.199 4.199 0 0 0-1.907-.139'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageFavourite);
export default ForwardRef;
