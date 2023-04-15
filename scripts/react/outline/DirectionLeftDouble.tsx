import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionLeftDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M10.82 6.276a1.016 1.016 0 0 0-.216.087c-.094.056-4.19 5.141-4.287 5.323-.065.121-.065.507 0 .628.028.052.982 1.259 2.121 2.683 2.253 2.817 2.181 2.74 2.588 2.736.343-.003.596-.209.691-.562.096-.358.115-.33-1.902-2.851L7.96 12l1.855-2.32c2.017-2.521 1.998-2.493 1.902-2.851a1.038 1.038 0 0 0-.122-.276c-.157-.221-.503-.344-.775-.277m6 0a1.016 1.016 0 0 0-.216.087c-.094.056-4.19 5.141-4.287 5.323-.065.121-.065.507 0 .628.028.052.982 1.259 2.121 2.683 2.253 2.817 2.181 2.74 2.588 2.736.343-.003.596-.209.691-.562.096-.358.115-.33-1.902-2.851L13.96 12l1.855-2.32c2.017-2.521 1.998-2.493 1.902-2.851a1.038 1.038 0 0 0-.122-.276c-.157-.221-.503-.344-.775-.277'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionLeftDouble);
export default ForwardRef;
