import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderOpenRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.503 2.041c-1.022.178-1.947.935-2.301 1.884-.167.447-.201.729-.201 1.685L4 6.52h7.98c4.389 0 7.98-.011 7.98-.024 0-.081-.139-.536-.218-.716-.194-.437-.621-.957-1.005-1.222a3.865 3.865 0 0 0-.928-.448c-.251-.078-.397-.085-2.209-.11-2.138-.03-2.135-.03-2.702-.301-.162-.077-.594-.374-1.014-.697-.74-.569-1.088-.773-1.544-.906-.209-.061-.461-.071-1.94-.079-.935-.006-1.789.005-1.897.024M3.014 8.057a1.95 1.95 0 0 0-.938.54c-.401.399-.596.856-.596 1.397 0 .367 1.834 8.926 2.018 9.416.451 1.203 1.448 2.102 2.731 2.461l.391.109h10.76l.391-.109c1.283-.359 2.28-1.258 2.731-2.461.184-.49 2.018-9.049 2.018-9.416 0-.54-.195-.997-.596-1.397a1.982 1.982 0 0 0-.996-.553c-.324-.067-17.634-.055-17.914.013m7.137 4.124c.096.04.451.363.999.91l.85.848.83-.825c.456-.455.888-.855.958-.89.254-.127.673-.048.857.162.196.223.253.582.131.826-.035.07-.435.502-.89.958l-.825.83.848.85c.863.865.971 1.007.971 1.281 0 .191-.175.513-.339.624a.84.84 0 0 1-.316.115c-.343.038-.42-.015-1.355-.944l-.871-.864-.849.847c-.548.547-.903.87-.999.91a.767.767 0 0 1-.805-.134c-.21-.184-.289-.603-.162-.857.035-.07.444-.511.91-.978l.845-.85-.845-.85c-.466-.467-.875-.908-.91-.978-.127-.254-.048-.674.162-.857a.768.768 0 0 1 .805-.134'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenRemove);
export default ForwardRef;
