import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.02 9.139a1.795 1.795 0 0 1-.16.04c-.089.02-.689.594-2.353 2.254-1.231 1.227-2.267 2.294-2.31 2.375a.78.78 0 0 0 .118.846c.192.219.607.289.877.149.081-.043 1.15-1.082 2.375-2.31 2.292-2.299 2.313-2.322 2.313-2.613 0-.237-.189-.551-.395-.657-.111-.056-.397-.108-.465-.084'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;
