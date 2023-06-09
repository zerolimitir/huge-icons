import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFilterTwoLineBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.503 5.041a3.178 3.178 0 0 0-1.8 1.039 2.97 2.97 0 0 0-.641 2.501 2.993 2.993 0 0 0 2.357 2.357c.407.085 2.751.088 3.141.005.671-.142 1.039-.343 1.544-.843.387-.384.598-.708.722-1.11l.07-.23h1.082c.666 0 1.143-.017 1.241-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.169-.013-1.169-.012-.044-.174c-.163-.651-.797-1.377-1.501-1.723-.627-.307-.661-.312-2.243-.322-.77-.005-1.489.006-1.597.025M2.811 7.278a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.222.062 5.216.062 5.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.643-.007c-1.454-.003-2.701.008-2.772.025m4.629 5.781a3.103 3.103 0 0 0-1.797 1.091c-.192.234-.47.758-.507.956l-.024.129-1.169.012-1.169.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.098.028.576.045 1.244.045H5.11l.026.13c.06.3.353.794.67 1.129.488.516.956.784 1.603.917.438.091 2.736.093 3.172.002C11.985 18.648 13 17.416 13 16c0-1.336-.906-2.51-2.244-2.908-.301-.09-2.921-.116-3.316-.033m8.371 2.219a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.222.062 5.216.062 5.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.643-.007c-1.454-.003-2.701.008-2.772.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterTwoLineBig);
export default ForwardRef;
