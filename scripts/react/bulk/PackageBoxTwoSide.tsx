import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageBoxTwoSide = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.66 2.384a5.256 5.256 0 0 0-.86.184c-.368.119-5.526 2.409-5.84 2.593-.35.205-.751.544-1.001.844l-.205.246.313.146c.172.08 1.856.847 3.742 1.705l3.429 1.558.001 5.948.001 5.947.19.03c.245.039.895.039 1.14 0l.19-.03.001-5.947V9.66l1.73-.785 1.729-.784.02 6.007.02 6.008.74-.328.74-.328.011-6.035.012-6.035 1.235-.559c1.009-.456 1.229-.57 1.202-.62-.136-.25-.794-.832-1.22-1.078-.26-.15-5.496-2.464-5.78-2.555a5.618 5.618 0 0 0-.467-.124c-.239-.048-.896-.085-1.073-.06'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxTwoSide);
export default ForwardRef;
