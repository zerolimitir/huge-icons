import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFilePdf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13 4.212c0 2.381.008 2.499.209 3.088a4.078 4.078 0 0 0 2.083 2.322c.159.074.45.185.648.245l.36.111 1.98.013c1.089.007 2.147.007 2.35.001l.371-.012-4.001-4-4-4v2.232M6.44 15.835V18h.88v-1.6l.47-.001c.908-.003 1.28-.102 1.598-.429.228-.235.335-.534.336-.938.001-.454-.084-.679-.364-.958-.342-.342-.424-.36-1.79-.384l-1.13-.02v2.165m4 .005V18h1.032c1.124 0 1.327-.027 1.699-.23.548-.298.87-.998.868-1.886-.002-1.258-.55-2.038-1.519-2.163-.165-.021-.7-.039-1.19-.04l-.89-.001v2.16m4.347-2.134c-.015.015-.027.987-.027 2.161V18h.92v-1.8h1.76v-.76h-1.76v-.999l1.03-.01 1.03-.011v-.72l-1.463-.01c-.804-.006-1.475.001-1.49.016m-6.281.826c.212.111.294.25.294.497 0 .157-.023.251-.083.335-.146.205-.284.248-.867.268l-.53.018v-1.22l.53.018c.386.013.564.036.656.084m4.074.018c.207.106.315.225.428.47.083.181.091.258.091.82 0 .655-.034.849-.189 1.084-.159.24-.37.311-1.02.341l-.57.027v-2.863l.55.02c.45.016.58.034.71.101'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilePdf);
export default ForwardRef;