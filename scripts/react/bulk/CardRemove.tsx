import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 9v2h20V7H2v2m14.82 6.14a2.274 2.274 0 0 1-.149.037c-.138.03-.375.236-.459.398-.076.147-.083.49-.013.627.027.054.43.481.895.948l.845.85-.845.85c-.465.467-.868.894-.895.948-.07.136-.063.48.012.623.071.136.244.306.387.38.126.065.477.065.604 0 .054-.027.48-.43.948-.894l.849-.845.871.864c.935.929 1.012.982 1.355.943a.74.74 0 0 0 .593-1.02c-.04-.095-.369-.457-.909-.999l-.847-.851.847-.849c.856-.857.971-1.009.971-1.27a.902.902 0 0 0-.212-.515.898.898 0 0 0-.539-.244c-.27-.002-.415.108-1.279.97l-.85.848-.852-.851c-.752-.751-.874-.858-1.046-.909-.199-.06-.213-.062-.282-.039m-11.24.955a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardRemove);
export default ForwardRef;
