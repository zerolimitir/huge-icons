import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShuffle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.811 5.278a.753.753 0 0 0-.53.926c.038.141.13.26.469.604l.422.429-2.199.011-2.199.012-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.107.03.855.045 2.278.045h2.12l-.406.41c-.454.46-.533.585-.533.85 0 .55.555.898 1.06.664.101-.047.452-.369.949-.872.683-.691.806-.835.92-1.075.124-.263.131-.3.131-.737s-.007-.474-.131-.737c-.114-.239-.235-.382-.9-1.053-.423-.426-.823-.808-.889-.848a.846.846 0 0 0-.569-.084m-12 10a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 6.215.062 6.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.143-.006c-1.729-.004-3.201.007-3.272.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShuffle);
export default ForwardRef;
