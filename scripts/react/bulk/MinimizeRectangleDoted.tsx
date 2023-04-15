import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMinimizeRectangleDoted = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.42 2.044a4.83 4.83 0 0 0-.579.139 3.972 3.972 0 0 0-2.653 2.639c-.16.506-.188.849-.188 2.283 0 1.415.022 1.647.209 2.195.093.272.282.665.402.834l.08.114-2.465 2.466L7.76 15.18l-.001-1.66c-.001-1.528-.007-1.673-.075-1.82a.745.745 0 0 0-1.382.029c-.054.129-.062.494-.062 2.771s.008 2.642.062 2.771a.734.734 0 0 0 .398.413c.15.07.318.074 2.8.074 2.482 0 2.65-.004 2.8-.074a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.147-.068-.292-.074-1.82-.075l-1.66-.001 2.466-2.466 2.466-2.465.121.086c.196.14.681.354 1.067.471.358.11.368.11 1.76.125.851.009 1.544-.002 1.769-.028 1.806-.212 3.264-1.653 3.489-3.449.054-.43.054-2.598 0-3.028-.221-1.764-1.64-3.196-3.413-3.443-.364-.05-2.769-.05-3.125.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinimizeRectangleDoted);
export default ForwardRef;
