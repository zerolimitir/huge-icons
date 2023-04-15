import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeCloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.78 10.066a3.436 3.436 0 0 0-1.691.909C7.364 11.671 7 12.515 7 13.5c0 .985.364 1.829 1.089 2.525a3.307 3.307 0 0 0 1.736.914c.272.055.649.063 2.755.053l2.44-.012.292-.107a2.597 2.597 0 0 0 1.572-1.6c.138-.422.138-1.125-.001-1.548a2.583 2.583 0 0 0-1.568-1.593c-.377-.133-1.018-.171-1.36-.081l-.225.059-.069-.145a3.87 3.87 0 0 0-.688-.939c-.684-.682-1.523-1.03-2.468-1.023-.245.002-.571.03-.725.063'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeCloud);
export default ForwardRef;
