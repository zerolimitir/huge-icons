import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAccessibility = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.601 2.064c-.557.15-.969.607-1.078 1.196-.118.64.253 1.323.877 1.613.187.088.276.103.6.103.324 0 .413-.015.6-.103.624-.29.995-.973.877-1.613-.111-.598-.523-1.049-1.096-1.198a1.354 1.354 0 0 0-.78.002M7.664 20.063a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212.984.984 0 0 0 0-1.402.996.996 0 0 0-1.037-.236m4 0a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937m4 0a1.005 1.005 0 0 0-.533.448c-.095.161-.111.233-.111.489s.016.328.111.489a.993.993 0 0 0 1.57.212c.18-.18.299-.459.299-.701 0-.674-.705-1.168-1.336-.937'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAccessibility);
export default ForwardRef;
