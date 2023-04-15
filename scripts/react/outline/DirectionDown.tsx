import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.811 9.278c-.311.076-.545.387-.545.722 0 .379-.052.331 2.737 2.562 1.424 1.139 2.631 2.093 2.683 2.121.121.065.507.065.628 0 .165-.088 5.264-4.188 5.313-4.272.336-.573-.153-1.278-.787-1.135-.198.044-.007-.101-2.65 2.013L12 13.04l-2.296-1.836a159.02 159.02 0 0 0-2.37-1.876c-.114-.06-.38-.085-.523-.05'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionDown);
export default ForwardRef;
