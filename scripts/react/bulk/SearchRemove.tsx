import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSearchRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m10.84 2.023-.512.06c-1.635.19-3.243.855-4.668 1.93-.412.311-1.336 1.235-1.647 1.647C2.961 7.055 2.36 8.477 2.094 10.2c-.098.637-.098 1.963 0 2.6.266 1.723.867 3.145 1.919 4.54.311.412 1.235 1.336 1.647 1.647 1.395 1.052 2.817 1.653 4.54 1.919.637.098 1.963.098 2.6 0 1.772-.273 3.235-.906 4.66-2.014 1.314-1.022 2.481-2.699 3.031-4.355.362-1.089.486-1.864.486-3.037 0-1.173-.124-1.948-.486-3.037-.311-.936-.841-1.924-1.504-2.803-.311-.412-1.235-1.336-1.647-1.647-1.383-1.043-2.828-1.657-4.5-1.912-.402-.061-1.708-.112-2-.078M8.98 7.985c.066.03.66.595 1.319 1.254l1.199 1.2 1.221-1.215c1.156-1.15 1.231-1.217 1.412-1.255.495-.103.92.233.92.728a.844.844 0 0 1-.063.324c-.034.065-.595.65-1.245 1.299L12.56 11.5l1.196 1.2c.658.66 1.225 1.258 1.26 1.328.122.244.065.603-.131.826-.192.219-.607.289-.877.149-.081-.043-.679-.61-1.327-1.26l-1.18-1.182-1.22 1.216c-1.074 1.07-1.242 1.222-1.396 1.262a.749.749 0 0 1-.924-.924c.04-.154.192-.322 1.262-1.396l1.216-1.22L9.24 10.3c-.66-.66-1.229-1.26-1.264-1.334-.08-.168-.08-.484 0-.638.08-.155.319-.361.455-.391.06-.013.127-.029.149-.036.064-.018.27.025.4.084'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearchRemove);
export default ForwardRef;