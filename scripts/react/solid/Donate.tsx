import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDonate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.28 4.026a2.72 2.72 0 0 0-2.031 1.521c-.366.795-.321 1.837.113 2.595.165.289 3.146 4.008 3.359 4.189.326.28.842.469 1.279.469a2.11 2.11 0 0 0 1.279-.469c.213-.181 3.194-3.9 3.359-4.189.215-.374.33-.797.351-1.282.024-.552-.049-.922-.266-1.36-.475-.958-1.381-1.5-2.503-1.5-.626 0-1.095.169-1.51.545-.438.395-.982.395-1.42 0a2.123 2.123 0 0 0-.892-.483 4.347 4.347 0 0 0-1.118-.036M2 12.501v4.5l2.39 1.192c1.965.981 2.49 1.226 2.95 1.378a8.214 8.214 0 0 0 1.748.387c.55.06 9.032.058 9.32-.002a2.062 2.062 0 0 0 1.548-1.548c.203-.973-.35-1.948-1.302-2.297-.216-.079-.343-.088-1.634-.114-1.202-.025-1.455-.041-1.786-.113-.416-.091-1.111-.32-1.373-.453-.13-.067-2.769-1.727-2.814-1.771-.007-.006.042-.108.108-.226.519-.92.175-2.124-.744-2.605-.492-.257-6.066-2.682-6.331-2.754-.211-.057-.431-.071-1.17-.073L2 8v4.501'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDonate);
export default ForwardRef;
