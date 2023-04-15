import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrackPreviousDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.807 6.289c-.249.053-.465.281-.523.549-.062.29-.062 10.034 0 10.324.163.758 1.269.758 1.432 0 .028-.132.044-.815.044-1.906v-1.7l.17.116c.443.301 6.274 3.667 6.468 3.734 1.148.395 2.433-.388 2.601-1.586.053-.374.053-7.266 0-7.64-.171-1.217-1.487-1.999-2.639-1.57-.24.089-6.373 3.639-6.53 3.78-.067.059-.07-.022-.071-1.654-.001-1.034-.017-1.787-.042-1.895-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPreviousDouble);
export default ForwardRef;
