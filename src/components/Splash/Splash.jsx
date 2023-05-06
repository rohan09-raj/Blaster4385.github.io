import React, { useEffect } from 'react'
import styles from './Splash.module.css'
import { useRef } from 'react'

const Splash = () => {

    // Write a command to the terminal and have it output to the terminal as an animation
    // The command is './blaster4385.sh'
    // The output is: a series of text of a linux boot sequence
    // everything is done automatically, no user input required


    const myRef = useRef(null)
    const myRef1 = useRef(null)
    const text = './blaster4385.sh'
    let index = 0
    let index1 = 0

    const bootSequence = [
        "Loading the kernel...",
        "Booting the kernel...",
        "Loading initial ramdisk...",
        "Setting up system clock...",
        "Initializing random number generator...",
        "Setting up loopback interface...",
        "Configuring network interfaces...",
        "Bringing up interface eth0...",
        "Determining IP information for eth0... done.",
        "Setting up hostname...",
        "Checking file systems...",
        "/dev/sda1: clean, 431203/1284192 files, 2002355/5124195 blocks",
        "/dev/sda2: clean, 811/128032 files, 324956/512000 blocks",
        "Remounting root file system in read-write mode...",
        "Mounting local filesystems...",
        "Activating swap partitions...",
        "Checking all file systems...",
        "Mounting local filesystems...",
        "Starting system log daemon...",
        "Starting kernel log daemon...",
        "Starting system message bus...",
        "Starting Avahi mDNS/DNS-SD Daemon...",
        "Starting Network Manager...",
        "Starting CUPS printing spooler/server...",
        "Starting OpenSSH daemon...",
        "Starting web server...",
        "Starting firewall...",
        "Starting graphical interface...",
        "Welcome to Blaster4385's website!",
      ];
      

    useEffect(() => {
        const textArea = myRef.current
        const typing = () => {
            textArea.append(text.charAt(index))
            index++
            setTimeout(
                () => {
                    if (index < text.length) {
                        typing()
                    }
                    else {
                        textArea.append('\n')
                        if (bootSequence[index1] != undefined) {
                        textArea.append(bootSequence[index1])
                        }
                        index1++
                        setTimeout(
                            () => {
                                if (index1 < bootSequence.length) {
                                    typing()
                                }
                                else {
                                    window.scrollTo(0, document.body.scrollHeight);
                                    setTimeout(
                                        () => {
                                            myRef1.current.style.minHeight='0px'
                                            myRef1.current.style.background='transparent'
                                            myRef1.current.style.borderRadius='16px'
                                            myRef.current.style.opacity='0'
                                            myRef1.current.style.backgroundImage='radial-gradient(white, transparent 180%)'
                                            setTimeout(
                                                () => {
                                                    myRef1.current.style.transform='scaleY(0)'
                                                }
                                                , 200)
                                            setTimeout(
                                                () => {
                                                    myRef1.current.style.display='none'
                                                }
                                                , 550)
                                            
                                        }
                                        , 2000)
                                }
                            }
                            , Math.floor(Math.random() * 220) + 50)
                            window.scrollTo(0, document.body.scrollHeight);

                    }
                }
                , Math.floor(Math.random() * 220) + 50)
        }
        typing()

    }, [])

    return (
        <div ref={myRef1} className={styles.term__container}>
            <pre ref={myRef} className={styles.term}>blaster4385@mainframe:~$ </pre>
        </div>
    )
}

export default Splash