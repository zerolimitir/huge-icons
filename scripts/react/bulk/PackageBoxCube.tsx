import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageBoxCube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.66 2.384a5.256 5.256 0 0 0-.86.184c-.368.119-5.526 2.409-5.84 2.593-.35.205-.751.544-1.001.844l-.205.246.313.146c.172.08 1.856.847 3.742 1.705l3.429 1.558.001 5.948.001 5.947.19.03c.245.039.895.039 1.14 0l.19-.03.001-5.947.001-5.948 3.735-1.699c3.059-1.391 3.73-1.71 3.703-1.76-.136-.25-.795-.832-1.22-1.078-.26-.15-5.496-2.464-5.78-2.555a5.618 5.618 0 0 0-.467-.124c-.239-.048-.896-.085-1.073-.06'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxCube);
export default ForwardRef;
