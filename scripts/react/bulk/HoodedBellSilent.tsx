import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHoodedBellSilent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.727 2.366c-.317.157-.465.508-.368.875.043.162.245.377 2.164 2.299l2.116 2.12-.082.12c-.173.255-.473.897-.588 1.26-.156.494-.17.588-.43 2.9a91.82 91.82 0 0 1-.263 2.2c-.1.564-.345 1.089-.777 1.667-.321.429-.452.722-.486 1.091-.068.723.392 1.484 1.107 1.836.5.245.67.265 2.365.265L8.989 19l.127.258c.384.78 1.118 1.37 2.024 1.629.459.13 1.261.13 1.72 0 .906-.259 1.64-.849 2.024-1.629l.127-.258h2.967l1.321 1.318c1.355 1.352 1.465 1.442 1.761 1.442.161 0 .4-.089.513-.192.198-.179.284-.569.185-.835-.063-.17-18.177-18.282-18.378-18.376a.735.735 0 0 0-.653.009'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBellSilent);
export default ForwardRef;
