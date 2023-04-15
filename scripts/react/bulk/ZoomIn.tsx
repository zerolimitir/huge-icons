import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgZoomIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.3 9.046a6.874 6.874 0 0 0-1.451.358c-1.845.733-3.157 2.207-3.65 4.102-.83 3.194 1.098 6.46 4.307 7.295a6.03 6.03 0 0 0 4.212-.46 5.992 5.992 0 0 0 3.248-5.865 5.99 5.99 0 0 0-6.666-5.43m.892 3.25c.153.081.31.261.363.42.027.083.045.439.045.91v.774l.79.001c.883.001 1.015.031 1.222.276.192.229.192.417 0 .646-.207.245-.339.275-1.222.276l-.79.001-.001.79c-.001.883-.031 1.015-.276 1.222-.24.201-.429.192-.677-.032-.218-.196-.246-.334-.246-1.215V15.6l-.79-.001c-.883-.001-1.015-.031-1.222-.276-.192-.229-.192-.417 0-.646.207-.245.339-.275 1.222-.276l.79-.001v-.774c0-.808.025-.972.176-1.141.201-.228.415-.293.616-.189'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgZoomIn);
export default ForwardRef;
