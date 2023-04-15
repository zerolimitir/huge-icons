import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClockRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.594 7.395a.715.715 0 0 0-.268.293c-.085.176-.086.2-.086 2.832 0 2.616.001 2.657.084 2.828a.86.86 0 0 0 .21.268c.073.054.798.317 1.721.624 1.66.551 1.819.587 2.058.464.277-.143.482-.526.43-.803-.036-.188-.217-.443-.38-.532-.078-.044-.696-.263-1.373-.487l-1.23-.409v-2.304c0-2.274-.001-2.306-.086-2.481A.73.73 0 0 0 12 7.28a.631.631 0 0 0-.406.115'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClockRectangle);
export default ForwardRef;
