import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 9v2h20V7H2v2m17.512 6.317a2.54 2.54 0 0 0-.42.185c-.214.125-1.611 1.482-1.739 1.69-.393.636.233 1.39.918 1.106.083-.034.33-.241.559-.469l.41-.408v1.768c0 1.139.016 1.84.044 1.973.163.758 1.269.758 1.432 0 .028-.133.044-.834.044-1.973v-1.767l.39.383a6.6 6.6 0 0 0 .489.449c.132.088.524.087.71-.001.313-.148.482-.578.356-.905-.08-.208-1.463-1.639-1.765-1.827-.435-.27-.979-.347-1.428-.204m-13.932.778a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardArrowUp);
export default ForwardRef;
