import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgComputerPieces = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.503 2.042c-1.016.172-1.947.934-2.301 1.883-.203.545-.201.473-.201 5.045L2 13.24h20V8.978c0-4.657.005-4.542-.234-5.129a2.99 2.99 0 0 0-1.47-1.537c-.66-.318.116-.289-8.176-.297-4.081-.003-7.509.009-7.617.027M2 15.022c0 .334.093.783.234 1.129a3.046 3.046 0 0 0 1.615 1.615c.575.234.569.234 4.129.234h3.262v2.52H8.776l-.181.115a.73.73 0 0 0 .103 1.29c.153.069.341.073 3.302.073s3.149-.004 3.302-.073a.73.73 0 0 0 .103-1.29l-.181-.115H12.76V18h3.262c3.559 0 3.554 0 4.128-.233 1.082-.441 1.85-1.58 1.85-2.745v-.262H2v.262'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgComputerPieces);
export default ForwardRef;
