import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m10.84 2.023-.512.06c-1.635.19-3.243.855-4.668 1.93-.412.311-1.336 1.235-1.647 1.647C2.961 7.055 2.36 8.477 2.094 10.2c-.098.637-.098 1.963 0 2.6.266 1.723.867 3.145 1.919 4.54.311.412 1.235 1.336 1.647 1.647 1.395 1.052 2.817 1.653 4.54 1.919.637.098 1.963.098 2.6 0 1.772-.273 3.235-.906 4.66-2.014 1.314-1.022 2.481-2.699 3.031-4.355.362-1.089.486-1.864.486-3.037 0-1.173-.124-1.948-.486-3.037-.311-.936-.841-1.924-1.504-2.803-.311-.412-1.235-1.336-1.647-1.647-1.383-1.043-2.828-1.657-4.5-1.912-.402-.061-1.708-.112-2-.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;
