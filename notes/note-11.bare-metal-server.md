## ⚙️ Overview

Huawei bare metal servers are dedicated physical servers used for deploying collaboration applications (SMC, SC, CloudMCU, CloudRSE).

They come in **different capacity setups** depending on the deployment scale.

---

## 🖥️ Medium Capacity

- **SMC (Service Management Center)** and **SC (Session Control)** are **pre-installed** on the same server.
- **CloudRSE** is pre-installed.
- **CloudMCU** must be installed manually.
- **Application software (MCU)** and **operating system** are delivered as an **image**.
- Runs on **CulerOS**.

---

## 🖥️ Large Capacity

- **SMC** and **SC** are deployed on **different servers**.
- **SC** is **pre-installed**.
- **SMC** must be installed manually.
- **CloudRSE** is pre-installed.
- **CloudMCU** must be installed manually.
- **Application software (SMC / MCU)** and **operating system** are delivered as an **image**.
- Runs on **CulerOS**.

---

## 📊 Medium vs Large Capacity (Quick View)

| Feature | Medium Capacity | Large Capacity |
| --- | --- | --- |
| **SMC & SC** | Pre-installed on **same server** | Deployed on **different servers** |
| **SC** | Pre-installed | Pre-installed |
| **SMC** | Pre-installed | Installed manually |
| **CloudRSE** | Pre-installed | Pre-installed |
| **CloudMCU** | Installed manually | Installed manually |
| **Software + OS** | MCU + CulerOS image | SMC/MCU + CulerOS image |
| **Scale** | Medium deployment | Large enterprise deployment |

---

✅ **Key Point**:

- **Medium capacity** = simpler, bundled (SMC + SC together).
- **Large capacity** = separated, more scalable (SMC and SC split).