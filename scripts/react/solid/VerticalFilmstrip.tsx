import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVerticalFilmstrip = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.76 4.62v2.62h10.48V2H6.76v2.62M4.92 2.146a4.634 4.634 0 0 0-.585.232c-1.125.531-1.858 1.397-2.201 2.603l-.114.399v13.24l.091.32c.324 1.137.878 1.889 1.828 2.481.275.171.864.411 1.171.477l.13.028v-9.923c0-7.914-.01-9.922-.05-9.919a2.9 2.9 0 0 0-.27.062M18.76 12v9.926l.13-.028a4.895 4.895 0 0 0 1.171-.477c.945-.589 1.506-1.351 1.828-2.481l.091-.32V5.38l-.11-.384c-.19-.667-.426-1.111-.857-1.616-.506-.594-1.386-1.124-2.123-1.279l-.13-.027V12m-12 0v3.24h10.48V8.76H6.76V12m0 7.38V22h10.48v-5.24H6.76v2.62'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalFilmstrip);
export default ForwardRef;
