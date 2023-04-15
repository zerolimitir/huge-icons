import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.265 2.041c-1.459.167-2.753.719-3.851 1.643-1.493 1.255-2.409 3.203-2.413 5.131-.004 2.11 1.449 4.959 3.657 7.167C9.972 17.297 11.137 18 12 18c.864 0 2.032-.705 3.341-2.017 2.214-2.219 3.662-5.057 3.658-7.168-.003-1.636-.663-3.302-1.802-4.546a7.118 7.118 0 0 0-3.95-2.152c-.536-.092-1.513-.13-1.982-.076m1.118 5.002c.802.147 1.456.829 1.584 1.652C14.153 9.894 13.209 11 12 11a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapBig);
export default ForwardRef;
