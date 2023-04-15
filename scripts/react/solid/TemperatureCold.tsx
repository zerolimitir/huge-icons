import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTemperatureCold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.503 2.04c-1.032.187-1.947.936-2.301 1.885-.203.544-.201.485-.201 4.905L9 12.96l-.473.47c-.492.49-.74.824-1.003 1.355-.367.742-.503 1.349-.503 2.235.001.689.032.897.226 1.5.256.797.62 1.388 1.232 2.002.705.706 1.43 1.11 2.441 1.361.327.081.477.094 1.08.093.596-.001.757-.015 1.08-.094 1.961-.481 3.312-1.841 3.81-3.836.117-.469.126-1.499.017-2.006-.227-1.062-.651-1.833-1.434-2.608L15 12.964V8.84c0-4.505.005-4.405-.234-4.991-.333-.819-1.125-1.51-2.01-1.752-.265-.073-.986-.106-1.253-.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTemperatureCold);
export default ForwardRef;
