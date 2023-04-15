import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignpostTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.956 4.604c-.192.029-.531.217-3.947 2.191-6.596 3.811-8.229 4.764-8.333 4.863-.244.23-.362.624-.278.935.057.211 2.087 3.74 2.256 3.922.276.296.785.389 1.141.208.094-.048.921-.521 1.838-1.052.917-.53 1.748-1.005 1.847-1.056.099-.051.823-.467 1.609-.924.785-.457 2.576-1.495 3.98-2.306 1.403-.812 2.609-1.519 2.68-1.572.23-.171.311-.384.707-1.867.437-1.63.454-1.763.273-2.111-.191-.368-.276-.405-1.929-.843-1.65-.436-1.595-.425-1.844-.388'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostTop);
export default ForwardRef;
