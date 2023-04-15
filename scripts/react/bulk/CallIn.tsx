import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCallIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M20.7 2.317c-.108.051-.931.847-2.54 2.459L15.78 7.16l-.02-1.19c-.023-1.346-.025-1.357-.351-1.586-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.334.234-.331.22-.331 1.716 0 1.154.009 1.353.073 1.58.219.784.75 1.436 1.447 1.777.529.259.63.274 2.005.292 1.407.019 1.51.006 1.74-.224.345-.346.285-.878-.13-1.153l-.169-.112-1.2-.013-1.2-.012 2.403-2.408c1.322-1.324 2.432-2.465 2.467-2.535.127-.254.048-.673-.162-.857a.764.764 0 0 0-.834-.118'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallIn);
export default ForwardRef;
