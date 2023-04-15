import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgParagraph = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.66 5.267a4.47 4.47 0 0 0-1.02.245A3.71 3.71 0 0 0 5.266 9c0 1.753 1.152 3.214 2.874 3.645.408.102 1.837.155 2.074.077.307-.101.544-.416.544-.722a.883.883 0 0 0-.243-.548c-.2-.183-.347-.212-1.092-.212-.384 0-.794-.02-.911-.044-.619-.128-1.251-.625-1.523-1.199-.429-.902-.265-1.885.429-2.579a2.222 2.222 0 0 1 1.094-.614c.147-.03 1.634-.044 4.828-.044 3.22 0 4.678-.013 4.822-.044.758-.163.758-1.269 0-1.432-.145-.031-1.565-.042-4.774-.037-2.512.003-4.64.013-4.728.02'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgParagraph);
export default ForwardRef;
