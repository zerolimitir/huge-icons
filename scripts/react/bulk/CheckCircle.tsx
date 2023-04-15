import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.698 8.315c-.208.095-.181.062-2.419 2.945-1.042 1.342-1.913 2.453-1.937 2.469-.153.106-.244.039-1.587-1.173-.734-.662-1.393-1.229-1.464-1.26a.939.939 0 0 0-.312-.056c-.448 0-.764.347-.731.802a.87.87 0 0 0 .084.331c.055.084 1.263 1.19 2.668 2.443.411.366.95.536 1.46.459.332-.05.76-.269.984-.503.278-.289 4.12-5.245 4.225-5.449a.656.656 0 0 0 .015-.623c-.181-.392-.605-.558-.986-.385'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckCircle);
export default ForwardRef;
