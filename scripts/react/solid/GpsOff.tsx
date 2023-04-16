import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGpsOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.061.112-.072.272-.082 1.256l-.013 1.128-.187.024a8.4 8.4 0 0 0-2.498.728l-.475.227 1.644 1.644 1.644 1.645.329-.033c.812-.08 1.745.17 2.466.66.236.16.752.677.915.916.488.719.745 1.699.655 2.501l-.032.288 1.644 1.644 1.645 1.645.227-.475a8.526 8.526 0 0 0 .732-2.48l.026-.21h1.045c.639 0 1.107-.018 1.204-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-1.128-.013-1.128-.012-.026-.208c-.443-3.542-3.216-6.397-6.726-6.927-.219-.033-.41-.06-.426-.06-.015 0-.033-.509-.04-1.13-.011-1.054-.017-1.139-.094-1.269a.807.807 0 0 0-.847-.363M2.672 2.362c-.349.184-.497.639-.319.981.047.091.801.875 1.781 1.854l1.7 1.697-.171.223c-.82 1.066-1.407 2.456-1.584 3.754l-.05.364-1.127.012-1.128.013-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.097.027.565.045 1.204.045H4.03l.026.21a8.093 8.093 0 0 0 3.633 5.766c.927.604 2.207 1.066 3.341 1.208l.21.026v1.045c0 .639.018 1.107.045 1.204.059.213.293.441.513.5.4.108.812-.12.92-.51.024-.085.042-.599.042-1.194V19.97l.21-.026a8.315 8.315 0 0 0 3.913-1.607l.223-.171 1.717 1.721c1.142 1.145 1.771 1.746 1.877 1.796a.733.733 0 0 0 1.06-.663.847.847 0 0 0-.077-.332c-.119-.227-18.186-18.27-18.372-18.347a.8.8 0 0 0-.639.021m6.759 8.129.531.532-.085.238c-.119.335-.147.917-.061 1.259.21.834.83 1.454 1.664 1.664.353.089.931.06 1.255-.064l.235-.089.535.534c.294.294.535.547.535.562 0 .058-.51.311-.86.428-2.107.702-4.362-.583-4.845-2.761-.104-.473-.088-1.243.036-1.716.094-.36.434-1.118.5-1.118.017 0 .269.239.56.531'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGpsOff);
export default ForwardRef;