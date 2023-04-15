import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrolley = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.807 1.284c-.533.128-.722.841-.327 1.236.199.199.399.24 1.16.24.507 0 .631.013.82.083.298.112.585.399.697.697.083.223.083.227.083 7.002 0 3.728.01 6.778.022 6.778a1.3 1.3 0 0 0 .183-.082c.247-.126.737-.238 1.042-.238h.275l-.013-6.71c-.01-5.112-.024-6.753-.061-6.89-.135-.499-.425-1.019-.747-1.341a3.085 3.085 0 0 0-1.341-.74c-.253-.06-1.581-.085-1.793-.035M12.7 7.316a.745.745 0 0 0 .029 1.382c.219.091 2.323.091 2.542 0a.748.748 0 0 0 0-1.396c-.122-.051-.348-.062-1.28-.061-1.014.001-1.148.008-1.291.075M8 19.514c0 .305-.112.795-.238 1.041a1.3 1.3 0 0 0-.082.183c0 .046 14.27.023 14.482-.022.758-.163.758-1.269 0-1.432-.146-.031-2.239-.044-7.184-.044H8v.274'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrolley);
export default ForwardRef;
